const Input = props => {
   return(
      <input 
         className="py-1 pl-5 w-full max-w-lg  dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full outline-none placeholder:text-gray-200 placeholder:dark:text-gray-600 placeholder:text-sx placeholder:uppercade placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2 invalid:focus:border-red-400 invalid:focus:dark:border-2 invalid:focus:dark:border-red-600" 
         {...props}
      />
   )
}

export default Input