import "./loading-styles.scss";

const renderLoadingBars = (barCount = 3) => {
  const loadingBars = [];
  for (let i = 1; i <= barCount; i++) {
    loadingBars.push(
      <div key={i} className={`loading-bars loading-bar-${i}`} />
    );
  }
  return loadingBars;
};

const Loading = () => {
  return <div className="loading-bars-container">{renderLoadingBars()}</div>;
};

export default Loading;
