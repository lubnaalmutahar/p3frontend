import { Row, Col, Button, Image, Form, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FormInput from "../components/FormInput.jsx";

function EditAccount() {

	const [values, setValues] = useState({
		username: "",
		email: "",
		birthday: "",
		password: "",
		confirmPassword: "",
	});
	
	const inputs = [
		{
	    id: 1,
		  name: "username",
		  type: "text",
		  placeholder: "Username",
		  errorMessage:	"Username should be 3-16 characters and shouldn't include any special character!",
		  label: "Username",
		  pattern: "^[A-Za-z0-9]{3,16}$",
		  required: true,
		},
		{
		  id: 2,
		  name: "email",
		  type: "email",
		  placeholder: "Email",
		  errorMessage: "It should be a valid email address!",
		  label: "Email",
		  required: true,
		},
		{
		  id: 3,
		  name: "birthday",
		  type: "date",
		  placeholder: "Birthday",
		  label: "Birthday",
		},
		{
		  id: 4,
		  name: "password",
		  type: "password",
		  placeholder: "Password",
		  errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
		  label: "Password",
		  pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
		  required: true,
		},
		{
		  id: 5,
		  name: "confirmPassword",
		  type: "password",
		  placeholder: "Confirm Password",
		  errorMessage: "Passwords don't match!",
		  label: "Confirm Password",
		  pattern: values.password,
		  required: true,
		},
	];
	
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	console.log (values); 
	
    return (
	
      <Row>

        {/* Edit Account Form */}
        <Col className="bg-primary py-5" sm={5}>
          <h2 className="text-dark text-center fw-bold px-5 mt-5 mx-5"> {" "}</h2>
          <h1 className="text-light text-center fw-bold px-5 mx-5">Edit account here</h1>              
    
          <div className="app">
		        <Form onSubmit={handleSubmit}>
			        {inputs.map((input) => (
			          <FormInput
                  className="ms-5 mb-3"
				          key={input.id}
				          {...input}
				          value={values[input.name]}
				          onChange={onChange}
			          />
			        ))}

        {/* Edit Button */}
          <div className="px-5 mt-3">
            <Button 
              className="rounded-pill fw-bold text-light mx-auto mt-2 mb-4 px-5" 
              variant="dark" 
              size="md"
            >
              Submit!
            </Button>
          </div>
          </Form>
          </div>

        </Col>

        {/* Image */}
        <Col className="shadow-lg rounded mx-5 my-4 pt-3" lg={6}>
        <Image 
          src="https://img.freepik.com/free-vector/multitasking-theme-illustration_52683-32122.jpg?w=740&t=st=1656901137~exp=1656901737~hmac=7c134aec7b896d17e157ead7502ca7a660dcbcb133ac50045b36056bd7e4228d" 
          fluid 
          rounded
          width={700}
          className=""
          alt=""
        />
        </Col>

      </Row>
	  );
}

export default EditAccount;




// import { Row, Col, Button, Image, Form, Container, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'

// function EditAccount() {
//   return (
//     <Row>
      
//       {/* Navigation bar */}
//       <Navbar bg="dark justify-content-end py-3" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto fw-bold">
//             <Nav.Link href="#home">HOME</Nav.Link>
//             <Nav.Link href="#features">FEATURES</Nav.Link>
//             <Nav.Link href="#contact">CONTACT</Nav.Link>
//             <Nav.Link href="#board">BOARD</Nav.Link>
//             <div className="px-2">
//             <Button className="rounded-pill fw-bold mx-auto px-5" variant="light" size="md">LOGOUT</Button>
//           </div>
//           </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>  

//       {/* Edit Account Form */}
//       <Col className="bg-primary py-5" sm={5}>
//         <h2 className="text-dark text-center fw-bold px-5 mt-5 mx-5"> {" "}</h2>
//         <h1 className="text-light text-center fw-bold px-5 mx-5">Edit account here</h1>              

//         <Form>
//           <Form.Group className="mx-5 mt-5 mb-3" controlId="formBasicEmail">
//             <Form.Control type="username" placeholder="Username" />
//           </Form.Group>

//           <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
//             <Form.Control type="email" placeholder="E-mail" />
//           </Form.Group>

//           <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
//             <Form.Control type="password" placeholder="Password" />
//           </Form.Group>

//           <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
//             <Form.Control type="repeatPassword" placeholder="Repeat password" />
//           </Form.Group>

//         {/* Edit Button */}
//         <div className="px-5 mt-3">
//           <Button className="rounded-pill fw-bold text-light mx-auto mt-2 mb-4 px-5" variant="dark" size="md">Submit!</Button>
//         </div>
//         </Form>
//       </Col>

//       {/* Image */}
//       <Col className="shadow-lg rounded mx-5 my-4 pt-3" lg={6}>
//         <Image 
//           src="https://img.freepik.com/free-vector/multitasking-theme-illustration_52683-32122.jpg?w=740&t=st=1656901137~exp=1656901737~hmac=7c134aec7b896d17e157ead7502ca7a660dcbcb133ac50045b36056bd7e4228d" 
//           fluid 
//           rounded
//           width={700}
//           className=""
//           alt=""
//         />
//       </Col>
//     </Row>
//   );
// }

// export default EditAccount;