import Image from "next/image"
import { conversionProps } from "../../interfaces"
import { useConversions } from "./useConversions"
import { Oval } from "react-loader-spinner"
import downloadAllIcon from "../../public/download-all-icon.svg"
import downloadIcon from "../../public/download-icon.svg"

export default function Conversions({ conversions }: { conversions: conversionProps[] }) {
  const { formatDuration, downloadAll } = useConversions()

  return (
    <div className="w-full max-w-[1200px] flex flex-col items-center ">
      <div className="w-full bg-[#7C7A7A] flex flex-col items-center gap-4 px-4 py-4 box-border rounded-3xl">
        <h1 className="text-[22px] text-white leading-[50px]">Conversiones</h1>
        <ul className="w-full flex flex-wrap xl:justify-center justify-between items-center gap-4">
          {conversions.map(conversion => {
            return (
              <li
                className="w-full max-w-[570px] h-[181px] flex flex-col items-center justify-center gap-2 bg-[#494949] p-5 px-4 box-border text-white rounded-3xl border-dashed border-[#7C7A7A] border-4"
                key={conversion.videoId}
              >
                {conversion.loading ? (
                  <Oval
                    height={40}
                    width={40}
                    color="#FF5D73"
                    wrapperStyle={{}}
                    wrapperClass="oval-loader"
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#7C7A7A"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                ) : (
                  <>
                    <header className="flex justify-start items-start gap-5 box-border w-full h-max">
                      <Image
                        className=""
                        src={`https://img.youtube.com/vi/${conversion.videoId}/0.jpg`}
                        alt="Miniatura"
                        width={100}
                        height={70}
                      />
                      <div>
                        <h3 className="font-bold w-full max-w-[400px] overflow-hidden text-ellipsis max-h-[48px]">
                          {conversion.title}
                        </h3>
                        <p>Duración: {formatDuration(conversion.duration)}</p>
                      </div>
                    </header>
                    {conversion.link && conversion.link.length <= 0 ? (
                      <Oval
                        height={40}
                        width={40}
                        color="#FF5D73"
                        wrapperStyle={{}}
                        wrapperClass="oval-loader"
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#7C7A7A"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                    ) : (
                      <a
                        className="w-full max-w-[190px] px-4 h-[50px] box-border rounded-lg bg-[#FF5D73] font-bold flex items-center gap-4 conversion"
                        href={conversion.link}
                        download={conversion.title ? `${conversion.title}.mp3` : 'file.mp3'}
                      >
                        Descargar MP3
                        <Image
                          src={downloadIcon}
                          alt="Descargar MP3"
                          width={20}
                          height={20}
                          style={{
                            filter:
                              " invert(99%) sepia(1%) saturate(0%) hue-rotate(32deg) brightness(114%) contrast(100%)"
                          }}
                        />
                      </a>
                    )}
                  </>
                )}
              </li>
            )
          })}
        </ul>
        {conversions.length >= 4 ? (
          <button
            className="w-full max-w-[200px] p-5 box-border rounded-lg bg-[#FF5D73] font-bold flex items-center gap-4 text-white"
            onClick={() => downloadAll()}
          >
            Descargar todo
            <Image
              src={downloadAllIcon}
              alt="Descargar todos los archivos"
              width={20}
              height={20}
              style={{
                filter:
                  " invert(99%) sepia(1%) saturate(0%) hue-rotate(32deg) brightness(114%) contrast(100%)"
              }}
            />
          </button>
        ) : null}
      </div>
    </div>
  )
}
