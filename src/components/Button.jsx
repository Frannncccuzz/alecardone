export default function Button({children}) {
  return (
    <div className="text-center mt-10">
      <a
        href="https://www.google.com/search?q=La+Rosa+dei+Venti+Mede&hl=it-IT&tbm=lcl#lrd=0x47874104d2d3f6df:0x545c2a05361f807e,1,,,"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#7B1E26] hover:bg-[#C7362F] text-white px-6 py-3 rounded-xl font-semibold shadow-md"
      >
        {children}
      </a>
    </div>
  );
}
