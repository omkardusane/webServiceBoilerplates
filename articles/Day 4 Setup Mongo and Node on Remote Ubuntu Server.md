# Installing MongoDB And Node.js On A Newly Setup Ubuntu Server

### SSH into the server

- Use puTTY's GUI if you're using Windows
- On Linux, ssh comes pre-installed

    ```sh
    $ ssh username@ip_addr
    ```
- Enter password and wait for the server's terminal prompt

### Install and setup MongoDB

## this article is also helpful: https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04

- Install using apt-get

    ```sh
    $ sudo apt-get install mongodb
    ```
- Create the folders where mongodb stores DBs locally

    ```sh
    $ sudo mkdir /data
    $ cd /data
    $ sudo mkdir /db
    ```
- Start the mongodb daemon
    ```sh
    $ sudo mongod
    ```
- Let the initial setup complete
- Check if mongodb is working. Type out 
    ```sh
    $ mongo
    ```
    and see if you get the mongo shell prompt. Enter 
    ```sh
    > show dbs
    ```
    and see if it outputs available dbs. Exit the mongo shell to return to the ubuntu shell.

### Install Node

Instructions copied from [here](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/).

```sh
 $ sudo apt-get install python-software-properties
 $ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
 $ sudo apt-get install nodejs
```

Check version of Node and npm using

```sh
$ node -v
$ npm -v
```

Now you can use npm to install all required modules and make a package.json file.
