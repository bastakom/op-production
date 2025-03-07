import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import { IoIosArrowRoundUp } from "react-icons/io";

export const Tabel = ({ destination }: any) => {
  const [openTable, setOpenTable] = useState(false);
  const [visibleTables, setVisibleTables] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleOpenTable = () => {
    setOpenTable(!openTable);
  };

  const handleLoadMore = async () => {
    setLoading(true);

    setTimeout(() => {
      if (visibleTables < destination.table_columns.length) {
        setVisibleTables((prev) => prev + 4);
      } else if (visibleTables > destination.table_columns.length) {
        setVisibleTables(destination.table_columns.length);
      }

      setLoading(false);
    }, 1000);
  };

  const handleLess = async () => {
    setVisibleTables(3);
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        className="flex items-center mx-auto w-[90%] lg:w-[70%] justify-between bg-[#f8f8f8] p-6 cursor-pointer"
        onClick={() => handleOpenTable()}
      >
        <h2 className=" text-[30px] font-normal normal-case ">
          {destination.title}
        </h2>
        <BsPlusLg fontSize={30} color="#004e70" />
      </div>
      <div className="w-[90%] lg:w-[70%] mx-auto">
        <div className={openTable ? "block mb-10" : "hidden"}>
          {render(destination.main_content)}
        </div>
        <div>
          {destination.table_columns
            .slice(0, visibleTables)
            .map((column: any) => (
              <div
                key={column._uid}
                className={
                  openTable
                    ? "grid grid-cols-1 lg:grid-cols-2  gap-4 mb-4"
                    : "hidden"
                }
              >
                {column.field.map((fieldItem: any) => (
                  <table key={fieldItem._uid}>
                    {fieldItem.caption &&
                      fieldItem.caption.map((captionItem: any) => (
                        <caption key={captionItem._uid}>
                          {captionItem.title}
                        </caption>
                      ))}

                    <tbody>
                      <tr>
                        {fieldItem.header &&
                          fieldItem.header.map((headerItem: any) => (
                            <th key={headerItem._uid} className="px-4 lg:px-10">
                              {headerItem.title}
                            </th>
                          ))}
                      </tr>
                      <tr>
                        {fieldItem.body &&
                          fieldItem.body.map((bodyItem: any) => (
                            <td key={bodyItem._uid} className="px-4 lg:px-10">
                              {bodyItem.title}
                            </td>
                          ))}
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
            ))}
          <div
            className={
              openTable ? "w-[100%] flex justify-center pt-5" : "hidden"
            }
          >
            {visibleTables == destination.table_columns.length ? (
              <button className="buttonRounded" onClick={() => handleLess()}>
                <IoIosArrowRoundUp fontSize={30} color="#004e70" />
              </button>
            ) : (
              <button
                className="buttonRounded"
                onClick={() => handleLoadMore()}
              >
                {loading ? `Laddar...` : `Ladda fler`}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
