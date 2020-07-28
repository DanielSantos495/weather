import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

class SkeletonComponent extends React.Component {

  render = () => {

    return(
      <div className="">
        <div className="container main__contaienr">
          <SkeletonTheme color="#32E0C4">
            <Skeleton count={3}/>
          </SkeletonTheme>
          <Skeleton count={20}/>
        </div>

        <div className="container next-container">

          <div className="next-container__article">
            <SkeletonTheme color="#32E0C4">
                <Skeleton count={2}/>
            </SkeletonTheme>
            <Skeleton count={10}/>
          </div>

          <div className="next-container__article">
            <SkeletonTheme color="#32E0C4">
                <Skeleton count={2}/>
            </SkeletonTheme>
            <Skeleton count={10}/>
          </div>

          <div className="next-container__article">
            <SkeletonTheme color="#32E0C4">
                <Skeleton count={2}/>
            </SkeletonTheme>
            <Skeleton count={10}/>
          </div>

          <div className="next-container__article">
            <SkeletonTheme color="#32E0C4">
                <Skeleton count={2}/>
            </SkeletonTheme>
            <Skeleton count={10}/>
          </div>

          <div className="next-container__article">
            <SkeletonTheme color="#32E0C4">
                <Skeleton count={2}/>
            </SkeletonTheme>
            <Skeleton count={10}/>
          </div>

          <div className="next-container__article">
            <SkeletonTheme color="#32E0C4">
                <Skeleton count={2}/>
            </SkeletonTheme>
            <Skeleton count={10}/>
          </div>

        </div>

      </div>

    );

  }

}

export default SkeletonComponent