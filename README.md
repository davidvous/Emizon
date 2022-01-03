# README

## Emizon

<img src="https://cdn.discordapp.com/attachments/920474033932349511/927572944857735208/logo_whitebg.png">

[Emizon](https://emizon.herokuapp.com/) is a marketplace inspired largely from Amazon. It can handle product display, addition to carts, and order processing with a seamless tie-in to 3rd party payment processing.

[Live Site](https://emizon.herokuapp.com/)

## At a glance

<img src="https://cdn.discordapp.com/attachments/920474033932349511/927567982404718592/main__navigate.gif">

> The splash page contains a collection of products and items curated as per Emizon standards. Users can immediatelely browse and peruse each item for more information.

<img src="https://cdn.discordapp.com/attachments/920474033932349511/927569646255751258/product__browse.gif">

> Users can add products from the collection to a cart, edit the quantity of each product they would like to procure, and also delete each product from their cart should they desire

<img src="https://cdn.discordapp.com/attachments/920474033932349511/927571301617524776/cart__function.gif">

> They can then follow these products through their cart and finalize these items as an order.

<img src="https://cdn.discordapp.com/attachments/920474033932349511/927572358380793856/checkout__funtion.gif">

> Following the true inspiration of Amazon, users can also add/edit/delete reviews and ratings to each product of the collection. This information is aggregated into a meta breakdown for other Emizon users to view/assess.

<img src="https://cdn.discordapp.com/attachments/920474033932349511/927574005156810752/review__function.gif">

### Technologies Used

> #### Libraries
> * React
> * Redux
> * React-Redux
> * NPM
> * SQLAlchemy
> * WTForms
> * PostgreSQL
> * Docker
> * NodeJs
> * Flask

> #### Languages
> * Python
> * JavaScript
> * HTML
> * CSS

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/davidvous/Emizon.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Before you deploy, don't forget to run the following command in order to
ensure that your production environment has all of your up-to-date
dependencies. You only have to run this command when you have installed new
Python packages since your last deployment, but if you aren't sure, it won't
hurt to run it again.

   ```bash
   pipenv lock -r > requirements.txt
   ```

2. Create a new project on Heroku
3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
4. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
5. Run

   ```bash
   heroku login
   ```

6. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

7. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
8. Push your docker container to heroku from the root directory of your project.
   (If you are using an M1 mac, follow [these steps below](#for-m1-mac-users) instead, then continue on to step 9.)
   This will build the Dockerfile and push the image to your heroku container registry.

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

9. Release your docker container to heroku

      ```bash
      heroku container:release web -a {NAME_OF_HEROKU_APP}
      ```

10. set up your database

      ```bash
      heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
      heroku run -a {NAME_OF_HEROKU_APP} flask seed all
      ```

11. Under Settings find "Config Vars" and add any additional/secret .env
variables.

12. Success!

### For M1 Mac users

(Replaces **Step 8**)

1. Build image with linux platform for heroku servers. Replace
{NAME_OF_HEROKU_APP} with your own tag:

   ```bash=
   docker buildx build --platform linux/amd64 -t {NAME_OF_HEROKU_APP} .
   ```

2. Tag your app with the url for your apps registry. Make sure to use the name
of your Heroku app in the url and tag name:

   ```bash=2
   docker tag {NAME_OF_HEROKU_APP} registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```

3. Use docker to push the image to the Heroku container registry:

   ```bash=3
   docker push registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```

