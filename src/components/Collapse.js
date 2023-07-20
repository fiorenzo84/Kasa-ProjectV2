import {useState, useEffect, useRef} from "react";
import {FaChevronUp} from "react-icons/fa";

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);
  // Declaration of a 'contentRef' reference to access the actual height of the content

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);
  // useEffect to allow the execution of code after each rendering of the component.
  // Each time isOpen changes, if isOpen is true, we change the height of the element to the total height of its   content.
  // Otherwise, we set the height to "0px".

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
