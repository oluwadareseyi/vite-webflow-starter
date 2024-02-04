# This is a repo showing my workflow for custom code Webflow using Vite

> I recommend using [Codesandbox](https://codesandbox.io/) (you could also just have it hosted locally while in development).
>

### To get started

1. Clone this repo.
2. Go to [Codesandbox](https://codesandbox.io/) and import the cloned repo.
3. Codesandbox will prompt you to install the dependencies during the environment setup and start the server in development mode.
4. Go to your Webflow project and add the following code to the head of your project:

  ```html
  <script type="module" src="http://localhost:3000/@vite/client"></script> This is to see your changes in real time.
  <script type="module" src="http://localhost:3000/js/index.js"></script>
  ```

5. Replace `http://localhost:3000` with the URL of your Codesandbox project.
6. Save and publish your Webflow project.
7. You should now see your changes in real time.

> Because codesandbox servers don't run forever, you will need to build your project for production by running `yarn build` and host the generated `index.js` file someplace.
>

### Places to host your `index.js` file

- You can upload the file to your Webflow project and link to it. You have to convert the file to a `.txt` file before uploading and then link to it. This is because Webflow doesn't allow you to upload `.js` files. You should replace the head code with the link yto the file as shown below:

  ```html
  <script
  type="text/javascript"
  src="https://uploads-ssl.webflow.com/${hash}/index.js.txt"
  ></script>
  ```

- Push the file to Github and paste the Github link on [jsDelivr](https://www.jsdelivr.com/github). It will give you a link to use in your Webflow project. Note that the file will be cached for 7 days. To update the file, you will need to purge the cache - <https://www.jsdelivr.com/tools/purge>.

- Look into alternative CDN options like [unpkg](https://unpkg.com/), [Cloudflare](https://www.cloudflare.com/), etc.
