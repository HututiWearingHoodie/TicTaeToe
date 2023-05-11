
const Button = ({ text, onClick, color }) => {
  return (
    <div
      className={`text-xl text-center font-semibold rounded-md px-4 py-2 ${color} w-1/2 sm:w-auto cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
