import EncodingParametersInURLs from './EncodingParametersInURLs.js';
import WorkingWithObjects from './WorkingWithObjects.js';
import WorkingWithArrays from './WorkingWithArrays.js';

function Assignment5() {
  const BASE_API = process.env.REACT_APP_BASE_API_URL;
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href= {`${BASE_API}\a5/assignment`}
           className="list-group-item">
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;

