import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperators from "./TernaryOperator";
import WorkingWithFunctions from "./ES5Functions";
import WorkingWithArrays from "./WorkingWithArrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing"
import Add from "./Add";
import PathParameters from "./PathParameters";

function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <IfElse/>
         <TernaryOperators/>
         <WorkingWithFunctions/>
         <WorkingWithArrays/>
         <TemplateLiterals/>
         <House/>
         <Spread/>
         <Destructing/>
         <FunctionDestructing/>
         <Add/>
         <PathParameters/>
      </div>
   );
}
export default JavaScript