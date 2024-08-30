export const useConversions = () => {
  const formatDuration = (duration: number) => {
    if (!isNaN(duration) && duration >= 0) {
      return new Date(duration * 1000).toISOString().substring(14, 19);
    } else {
      return "00:00"; // veya bir hata durumu için başka bir varsayılan değer
    }
  };


  const downloadAll = () => {
    const conversions = document.querySelectorAll(".conversion")
    conversions.forEach((conversion: any) => {
      conversion.click()
    })
  }

  return { formatDuration, downloadAll }
}
