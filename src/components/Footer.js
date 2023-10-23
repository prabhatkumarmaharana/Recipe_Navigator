const Footer = () => {
  return (
    <footer className='p-8 flex flex-col  items-center gap-3 bg-rose-200 opacity-75'>
      <h2 className='footer-logo font-bold lowercase italic text-2xl'>
      Recipe<span className='text-rose-500'>Navigator</span>
      </h2>
      <p>&copy; {new Date().getFullYear()} RecipeNavigator. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
