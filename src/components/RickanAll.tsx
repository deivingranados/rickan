import React, { useEffect } from "react";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { list } from "../redux/Slice";
import { rickService } from "../redux/service";
import "./rickan.css";
import RickanDetails from "./RickanDetails";

const RickanAll = () => {
  const [text, setText] = React.useState("");
  const [textNew, setTextNew] = React.useState<any>([]);
  const [contentMain, setContentMain] = React.useState(true);
  const [idDetails, setIdDetails] = React.useState<any>();
  const [contentSerach, setContentSearch] = React.useState(false);
  const characterList = useSelector(
    (state: RootState) => state.rikanList.RickanCharecter
  );
  const dispatch = useDispatch();

  const getRickanAll = async () => {
    const result = await fetch(rickService.characters, {
      headers: {
        "Content-Type": rickService.type,
      },
    });

    return result.json();
  };

  useEffect(() => {
    const listCharecters = async () => {
      const rickanAll = await getRickanAll();
      dispatch(list(rickanAll.results));
    };
    listCharecters();
  }, []);

  useEffect(() => {
    const listCharecters = async () => {
      const rickanAll = await getRickanAll();
      dispatch(list(rickanAll.results));
    };
    listCharecters();
  }, [text]);

  const filter = (event: React.FormEvent<HTMLInputElement>) => {
    var text = event.currentTarget.value;
    const data = characterList;
    const newData = data?.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setTextNew(newData);
    setText(text);
    setContentMain(false);
    setContentSearch(true);

    if (text === "") {
      setContentMain(true);
      setContentSearch(false);
    }
  };

  const handleDetails = (item: any) => {
    setIdDetails(item);
  };

  return (
    <div className="content_father_main">
      <nav className="nav">
        <h6 className="title">Rickan</h6>
      </nav>
      <input
        type="text"
        className="search_input"
        onChange={filter}
        placeholder="Buscar"
      />
      <div className="content_father">
        <div className="row row-cols-1 row-cols-sm-2" id="contetn_main">
          {contentMain
            ? characterList?.map((item: any) => {
                return (
                  <div className="contentMain">
                    <div className="contentCard">
                      <div className="contenImage">
                        <img
                          className="image_character"
                          alt="Avatar"
                          src={item.image}
                        />
                      </div>
                      <div className="contentInfo">
                        <h5 className="title_name">{item.name}</h5>
                        <p className="text_status">{item.status}</p>
                        <p className="text_species">{item.species}</p>
                        <div className="content_button">
                          <button
                            className="button1"
                            onClick={() => handleDetails(item)}
                          >
                            Detalles
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
          {contentSerach
            ? textNew?.map((item: any) => {
                return (
                  <div className="contentMain">
                    <div className="contentCard">
                      <div className="contenImage">
                        <img
                          className="image_character"
                          alt="Avatar"
                          src={item.image}
                        />
                      </div>
                      <div className="contentInfo">
                        <h5 className="title_name">{item.name}</h5>
                        <p className="text_status">{item.status}</p>
                        <p className="text_species">{item.species}</p>
                        <button
                          className="button1"
                          onClick={() => handleDetails(item)}
                        >
                          Detalles
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        <div className="content_details">
          <RickanDetails date={idDetails} />
        </div>
      </div>
    </div>
  );
};

export default RickanAll;
