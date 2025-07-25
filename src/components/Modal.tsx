export default function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: any; children: any }) {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors text-black
    ${isOpen ? "visible bg-black/20" : "invisible"}`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-10 transition-all 
        ${isOpen ? "scale-100 opacxity-100" : "scale-125 opacity-0"}`}>
        <button className='absolute top-2 right-5 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 cursor-pointer text-2xl'
          onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  )
}
