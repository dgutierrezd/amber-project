React Native project created for Amber to test skills.

# Getting Started

## Add Coinbase API url to your .env file

Create `.env` file on the root of the project and add the following line

```bash
URL_COINBASE_API=https://api.coinbase.com/v2/
```

Install all dependencies

```bash
$ yarn start
$ cd ios/ && pod install && cd ..
```

## Run the application

```bash
yarn ios
```

Once initialized the app you could see 6 currencies to check the rates of each one.
![image](https://github.com/dgutierrezd/amber-project/assets/43121233/c4bbb78d-8886-4d65-a4e1-ca96d30c05c0)

For open the currency you should drag the currency symbol to the left and with a fade animation open the currency rates

## Save the rates on Calendar

Yeah! you can save the rates of the currencies on the calendar to get a track how is the currency price today in comparison to the next days and comparing other currencies

You have to press the download button beside the rate value and it will ask you permissions to access to the calendar and it's all! You have saved today rates on your calendar

## Errors

On the app you can handle some errors for example
* Know when you are offline, you will get an alert to tell you if you are offline, to connect again.
* If there is a problem fetching the currencies data, no worries! it is always saved on your local storage of the phone, to at least get the currencies fetched the last time.

I hope you will like this app and I would really like to work with you!

