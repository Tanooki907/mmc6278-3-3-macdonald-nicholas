# Heroku Deployment Instructions

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Introduction

[Heroku](https://www.heroku.com/) is a [Salesforce](https://www.salesforce.com/) product that makes deploying full-stack applications relatively painless. Although Heroku offers paid tiers, there is a generous free tier available that will cover our needs for class.

The only downside to the Heroku free tier is that your app will "spin down" after periods of inactivity, and will then have to "spin up" after a new request comes in. This "cold start" means that your user may have to wait a few seconds longer than normal to access your app if they are the first user to have accessed it in some time.

&nbsp;
## Setup

Navigate to the [Heroku](https://www.heroku.com/) homepage and sign up for a free account. 

After creating an account, install the Heroku CLI. In your terminal, run:

```
npm i -g heroku
```

This will install the Heroku CLI globally on your machine using NPM. To verify Heroku works, run:

```
heroku login
```

&nbsp;
## Creating a Heroku App

Although you can create a heroku app from the Heroku CLI, instead create your Heroku apps from the [heroku dashboard](https://dashboard.heroku.com/new-app). This allows you to pick a name for your app upfront instead of letting Heroku generate a random app name and having to change it later. For the rest of this guide, let's assume you create an app named `banana-apple-mango`.

Next, in your terminal, navigate to your assignment's git repository folder. You'll need to add the Heroku remote to git so that you can push to Heroku.

You can either run:

```
heroku git:remote -a banana-apple-mango
```

Or:

```
git remote add heroku https://git.heroku.com/banana-apple-mango.git
```

You can verify that you've added the remote correctly by running:

```
git remote -v
```

You should see remote addresses for both origin (GitHub) and heroku.

&nbsp;
## Deployment

To deploy your app with Heroku, you simply need to make a git commit and push to heroku. Assuming you have a default branch named `master`, you would run the following command:

```
git push heroku master
```

This will push your latest git commit to Heroku for deployment. You can technically push any branch you would like to Heroku, but I recommend sticking to your default branch.

&nbsp;
## Troubleshooting

If you have issues with Heroku deployments, you can follow a few steps:

- Heroku looks for your `package.json` file when deploying. If this file is not in the root directory of your repository, Heroku will not understand how to deploy your application.
- If your app is crashing on Heroku after deployment, you can run `heroku logs --tail` or navigate to your Heroku app's dashboard page and click the "more" button in the top right and "view logs" to view logged output from your app.