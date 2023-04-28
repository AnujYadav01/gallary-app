import "./index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container">
      <div className="image">
        <img
          className="image1"
          src={
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          }
          alt="image"
        />
        <Carousel responsive={responsive} className="all-image">
          <div>
            <img
              style={{ width: 210, height: 210, borderRadius: 25 }}
              src={
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              }
              alt="image"
            />
          </div>
          <div>
            <img
              style={{ width: 210, height: 210, borderRadius: 25 }}
              src={
                "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
              }
              alt="image"
            />
          </div>
          <div>
            <img
              style={{ width: 210, height: 210, borderRadius: 25 }}
              src={
                "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
              }
              alt="image"
            />
          </div>
          <div>
            <img
              style={{ width: 210, height: 210, borderRadius: 25 }}
              src={
                "https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg"
              }
              alt="your-image-alt-text"
            />
          </div>
        </Carousel>
      </div>
      <div className="text">
        <h1>K Ronaldo</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages.
        </p>
        <PlayCircleIcon
          size="large"
          style={{ marginTop: 100, marginLeft: 100, color: "blur" }}
        />
      </div>
      <div></div>
    </div>
  );
}

export default App;
