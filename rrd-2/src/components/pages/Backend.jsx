import { Link } from "react-router-dom";
function Backend() {
  return (
    <>
      <Link to={"nodejs"}>NodeJS</Link>
      <Link to={"sql"}>SQL</Link>
      <Link to={"mysql"}>My-SQL</Link>
    </>
  );
}
export default Backend;
