import {useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

export default function SlideShow(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  //console.log(props);

  // Go to the previous image
  function previousSlide() {
    const lastIndex = props.rental.length - 1;
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? lastIndex : currentIndex - 1;

    setCurrentIndex(index);
  }

  // Go to the next image
  function nextSlide() {
    const lastIndex = props.rental.length - 1;
    const resetIndex = currentIndex === lastIndex;
    const index = resetIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  }

  const hasMoreImages = props.rental.length > 1;

  return (
    <div>
      <div className="container-slideShow">
        {/* if more than one image, display the arrows and their function along with the counter */}
        {hasMoreImages && (
          <FaChevronLeft className="arrow-left" onClick={previousSlide} />
        )}
        {hasMoreImages && (
          <FaChevronRight className="arrow-right" onClick={nextSlide} />
        )}
        {props.rental.map((images, index) => (
          <img
            src={images}
            alt={images.title}
            key={index}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
        <div className="container-counter-image">
          {hasMoreImages && (
            <p>
              {currentIndex + 1}/{props.rental.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
