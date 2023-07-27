import {useState, useEffect, useRef} from "react";
import {FaChevronUp} from "react-icons/fa";

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  // Declaration of a 'contentRef' reference to access the actual height of the content
  const contentRef = useRef(null);

  useEffect(() => {
    // Adjusts the height of the content based on whether it is open or closed
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  const iconClass = `icon ${isOpen ? "open" : ""}`;
  const contentClass = `collapse-content ${isOpen ? "open" : "closed"}`;
  const content = <div className="content-inner">{props.children}</div>;

  return (
    <>
      <button className="collapse-button">
        {props.title}
        <span className={iconClass} onClick={() => setIsOpen(!isOpen)}>
          <FaChevronUp />
        </span>
      </button>
      <div
        ref={contentRef}
        className={contentClass}
        style={{maxHeight: height}}>
        {content}
      </div>
    </>
  );
}
