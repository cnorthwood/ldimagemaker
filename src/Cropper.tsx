import React, { ChangeEvent, FunctionComponent, useCallback, useState } from "react";
import ReactCrop, { PercentCrop } from "react-image-crop";

import "react-image-crop/src/ReactCrop.scss";

const Cropper: FunctionComponent<{
  imageUrl: string;
  crop: PercentCrop;
  setCrop: (crop: PercentCrop) => void;
}> = ({ imageUrl, crop, setCrop }) => {
  const [enableCrop, setEnableCrop] = useState<boolean>(false);
  const toggleCrop = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setEnableCrop(ev.currentTarget.checked);
      if (!ev.currentTarget.checked) {
        setCrop({ x: 0, y: 0, width: 100, height: 100, unit: "%" });
      }
    },
    [setCrop],
  );

  const saveCrop = useCallback(
    (crop, percentCrop) => {
      setCrop(percentCrop);
    },
    [setCrop],
  );

  const clearCrop = useCallback(() => {
    setCrop({ x: 0, y: 0, width: 100, height: 100, unit: "%" });
  }, [setCrop]);
  const facebookCrop = useCallback(() => {
    setCrop({ x: 0, y: 0, unit: "%", width: 50, height: 50 });
  }, [setCrop]);
  const twitterCrop = useCallback(() => {
    setCrop({ x: 0, y: 0, unit: "%", width: 50, height: 50 });
  }, [setCrop]);
  const instaCrop = useCallback(() => {
    setCrop({ x: 0, y: 0, unit: "%", width: 50, height: 50 });
  }, [setCrop]);

  return (
    <>
      <div className="control">
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={enableCrop}
              disabled={!imageUrl}
              onChange={toggleCrop}
            />{" "}
            Crop image
          </label>
        </div>
      </div>
      {enableCrop ? (
        <>
          <div className="control">
            <div className="field">
              <ReactCrop aspect={1} crop={crop} onChange={saveCrop}>
                <img src={imageUrl} alt="Crop me" />
              </ReactCrop>
            </div>
          </div>
          <div className="control">
            <div className="field">
              <div className="buttons">
                <button className="button" onClick={clearCrop}>
                  Reset crop
                </button>
                <button className="button" onClick={facebookCrop}>
                  Crop for Facebook
                </button>
                <button className="button" onClick={twitterCrop}>
                  Crop for Twitter
                </button>
                <button className="button" onClick={instaCrop}>
                  Crop for Instagram
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Cropper;
