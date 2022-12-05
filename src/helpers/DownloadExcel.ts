import * as XLSX from "xlsx";
interface IDownloadExcel {
  getFetch: () => Promise<any>;
  fileName?: string;
}
const DownloadExcel = async (getFetch: IDownloadExcel["getFetch"], fileName: IDownloadExcel["fileName"] = "download") => {
  try {
    const data = await getFetch();
    const { objModel }: any = data; // base64
    const wb = XLSX.read(objModel, { type: "base64" });
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    XLSX.utils.sheet_to_json(ws, { header: 1 });
    const wscols = [
      { wch: 15 },
      { wch: 30 },
      { wch: 15 },
      { wch: 30 },
      { wch: 30 },
      { wch: 15 },
      { wch: 15 },
      { wch: 15 },
      { wch: 15 },
      { wch: 15 },
    ];
    ws["!cols"] = wscols;
    XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    function s2ab(s: any) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    }
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  } catch (err) {
    console.log(err);
  }
};


export default DownloadExcel;