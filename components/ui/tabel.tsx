import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";

export const Tabel = ({ destination }: any) => {
  const [openTable, setOpenTable] = useState(false);

  const handleOpenTable = () => {
    setOpenTable(!openTable);
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        className="flex items-center mx-auto w-[70%] justify-between bg-[#f8f8f8] p-6 cursor-pointer"
        onClick={() => handleOpenTable()}
      >
        <h2 className=" text-[30px] font-normal normal-case ">
          {destination.title}
        </h2>
        <BsPlusLg fontSize={30} color="#004e70" />
      </div>
      {destination.table_columns.map((column: any) => (
        <div
          key={column._uid}
          className={
            openTable ? "grid grid-cols-2 w-[70%] mx-auto gap-4" : "hidden"
          }
        >
          {column.field.map((fieldItem: any) => (
            <table key={fieldItem._uid}>
              {fieldItem.caption &&
                fieldItem.caption.map((captionItem: any) => (
                  <caption key={captionItem._uid}>{captionItem.title}</caption>
                ))}

              <tbody>
                <tr>
                  {fieldItem.header &&
                    fieldItem.header.map((headerItem: any) => (
                      <th key={headerItem._uid} className="px-10">
                        {headerItem.title}
                      </th>
                    ))}
                </tr>
                <tr>
                  {fieldItem.body &&
                    fieldItem.body.map((bodyItem: any) => (
                      <td key={bodyItem._uid} className="px-10">
                        {bodyItem.title}
                      </td>
                    ))}
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      ))}
    </div>
  );
};
