const Footer = () => {
  const date = new Date().getHours();
  const opened = 12;
  const closed = 22;
  const isOpen = date >= opened && date < closed;

  return (
    <footer className="footer">
      {isOpen ? (
        <span>
          {date}:00 we're opene untill {closed}:00
        </span>
      ) : (
        <span>we are offline</span>
      )}
    </footer>
  );
};

export default Footer;
