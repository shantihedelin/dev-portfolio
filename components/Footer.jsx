//TODO: add linkedin and github icons

export default function Footer() {
  return (
    <div className="flex justify-center flex-col pb-16">
      <h5 className="flex justify-center text-black">Contact me:</h5>
      <div className="flex justify-center text-black">
        <div>E-mail: &nbsp;</div>
        <a href="mailto:shanti.hedelin@hotmail.com" className=" text-black no-underline hover:text-[#EA1179]">shanti.hedelin@hotmail.com</a>
      </div>
      <div className="links flex justify-center space-x-6 pt-12">
        <a
          href="https://www.linkedin.com/in/shanti-hedelin-12129b22b/"
          className=" hover:text-[#EA1179]"
        >
          Linkedin
        </a>
        <a href="https://github.com/shantihedelin" className=" hover:text-[#EA1179]">
          Github
        </a>
      </div>
    </div>
  );
}
