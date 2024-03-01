import React from 'react'

const Skeleton = () => {
  const movieIsLoadingStyle: React.CSSProperties = {
    height: '250px',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '0',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  };

  const loadingImageStyle: React.CSSProperties = {
    flex: 1,
    backgroundImage: 'linear-gradient(90deg, #ececec 0px, #f4f4f4 40px, #ececec 80px)',
    backgroundSize: '250px',
    animation: 'shine-loading-image 2s infinite ease-out',
  };

  const loadingContentStyle: React.CSSProperties = {
    flex: 1,
    background: '#fff',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const loadingMainTextStyle: React.CSSProperties = {
    height: '5px',
    width: '100%',
    background: '#ececec',
    backgroundImage: 'linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px)',
    backgroundSize: '250px',
    borderRadius: '10px',
    animation: 'shine-loading-container-items 2s infinite ease-out',
  };

  const loadingBtnStyle: React.CSSProperties = {
    width: '100%',
    height: '50px',
    background: '#ecb9b9',
  };

  const skeletonRowStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '10px',
    gap: '5px',
  };

  const skeletonTableStyle: React.CSSProperties = {
    background: '#e1e1e1',
    borderRadius: '4px',
    height: '40px',
    position: 'relative',
    overflow: 'hidden',
  };

  const skeletonTableBeforeStyle: React.CSSProperties = {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: '-150px',
    top: '0',
    height: '100%',
    width: '150px',
    background: 'linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%)',
    animation: 'load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite',
  };

  // You can define other keyframes here as well

  const styles = {
    movieIsLoadingStyle,
    loadingImageStyle,
    loadingContentStyle,
    loadingMainTextStyle,
    loadingBtnStyle,
    skeletonRowStyle,
    skeletonTableStyle,
    skeletonTableBeforeStyle,
  };

  // return (
  //   <div className="movie--isloading">
  //     <div className="loading-image"></div>
  //     <div className="loading-content">
  //       <div className="loading-text-container">
  //         <div className="loading-main-text"></div>
  //         <div className="loading-main-text"></div>
  //         <div className="loading-sub-text"></div>
  //       </div>
  //     </div>
  //     {/* <div className="loading-btn"></div> */}
  //   </div>
  // )
  return (
    <div data-testid="skeleton" style={styles.movieIsLoadingStyle}>
      <div style={styles.loadingImageStyle}></div>
      <div style={styles.loadingContentStyle}>
        <div style={styles.loadingContentStyle}>
          <div style={styles.loadingMainTextStyle}></div>
          <div style={styles.loadingMainTextStyle}></div>
          {/* <div style={styles.loadingSubTextStyle}></div> */}
        </div>
      </div>
      {/* <div style={styles.loadingBtnStyle}></div> */}
    </div>
  );
}

export default Skeleton
