/**
 * This code was generated by Builder.io.
 */
import * as React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({ className, children, onClick, type }) => {
  return (
    <button
      className={`bg-black bg-opacity-0 border-black border-opacity-0 max-md:bg-sky-600 max-md:border-white ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const MyComponent: React.FC = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with:", { fullName, email });
    // Add your form submission logic here
  };

  return (
    <>
      <Button>Click Here</Button>
      <main>
        <h1>Påmelding til minityrmaling 23.04.24 kl 17 i nedre vollsgate</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName" className="sr-only">
            Fullt navn
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Fullt navn"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email" className="sr-only">
            E-post
          </label>
          <input
            type="email"
            id="email"
            placeholder="E-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="max-md:bg-black max-md:border-white"
          >
            Meld deg på
          </Button>
        </form>
        <img
          loading="lazy"
          alt="Relevant description of the image"
          src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa0a411352fa846ba9f7131b940a4ae9f"
          className="object-cover w-full"
        />
        <img
          loading="lazy"
          alt="Relevant description of the image"
          src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F46557d6209db4923a0ff7d03e5be474e"
          className="object-cover w-full"
        />
      </main>
    </>
  );
};

export default MyComponent;