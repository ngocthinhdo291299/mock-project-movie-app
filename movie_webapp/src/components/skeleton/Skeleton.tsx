import "./skeleton.scss";
function Skeleton(props: any) {
  const { className } = props;
  return (
    <div className={`${className}`}>
      {className === "category" && (
        <ul className="skeleton-list">
          {Array(20)
            .fill(0)
            .map((item, index) => (
              <li className="skeleton-item" key={index}></li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Skeleton;
