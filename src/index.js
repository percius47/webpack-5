import App from "./App";
// import Logo
import Logo from './logo.svg'

// inside innerHTML

const root = document.getElementById("root");
root.innerHTML = `
<h1> learning web tooling today </h1>
<img src='${Logo}' alt='build icon' />
${App({ name: "Tanay" })}
`;
