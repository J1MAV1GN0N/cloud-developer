import express, { response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

/*

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  app.get("/filteredimage", async ( req, res ) => {
  //  1. validate the image_url query
    let exImage;
    let filteredImagePath;
    try {
      // Is there an existent image? True || False?
      exImage = await imageExists(req.query.image_url);

  //  2. call filterImageFromURL(image_url) to filter the image
      if (exImage) {
        filteredImagePath = await filterImageFromURL(req.query.image_url)
        res.status(200).sendFile(filteredImagePath);
      } else {
        return res.status(415).send("Image type is not supported.")
      }
    }
    catch (error) {
      response.status(400).send(error);
    }
  });

//    3. send the resulting file in the response (upload filtered image file).
  app.post("/filter-image", upload.single("file"), async (req, res) => {
    if (!req.file || !isSupportedFileExt(path.extname(req.file.originalname))) {
      return res
        .status(403)
        .contentType("text/plain")
        .end("This image is not supported.");
    }

    const filteredImagePath = await filterImageFromURL(
      // Note: I'll ignore tslint warning of no trailing comma,
      // as trailing comma here is removed by prettier formatter.
      // See https://prettier.io/docs/en/options.html
      path.join(appRoot.path, req.file.path)
    );
    res.status(200).sendFile(filteredImagePath);
  });


  /* Delete image files on server. 
  app.post("/delete-files", async (request, res) => {
    deleteLocalFiles(getTempFiles());
    res.status(200).send("All image files have been removed");
  });

*/

  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("Hey my friend, if you want to filter a public image simply try to add /filteredimage?image_url={{}} to the URL :)")
  });
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();