## Static Site Depoloyment

### Context

This repo is in response to a [twitter conversation](https://twitter.com/mauerbac/status/1263287585981554697?s=20)

The notion is that if one has 2 static `.html` files that one `reactApp.html` that links to a react bundle, then how can we deploy all 3 to an s3 bucket for website hosting.

Given those contraints, let's see how we can accomplish this

### Steps to Create

1. Clone this repo
2. Create your s3 bucket in the console.
3. Under permissions, make sure to allow public read access with the following policy:

> 🗒️ replace `<your_bucket>` with your bucket name. Remember to have a `/*` at the end.

```
{
  "Version": "2012-10-17",
  "Statement": [
      {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::<your_bucket>/*"
      }
  ]
}
```

4. With the aws cli already installed and configured globally, change in this project directory and run the following command

- `npm run deploy`

### Insights

This will start by running the `predeploy` command. This will build the react portion of the app, create a `lib` directory (feel free to rename) and copy both the `html` files, as well as the output from webpack in the lib directory.

Additonally, if there is already a `lib` directory created, it will delete it and start fresh.

Lastly, the `deploy` command runs. This command will upload the `lib` directory and its contents to s3.

Preview your site in the browser by finding the url in the amplify console, or by using the following format:

`http://<bucket-name>.s3-website-<bucket_region>.amazonaws.com/`
