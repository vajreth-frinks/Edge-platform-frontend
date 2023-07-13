import { UploadCloud } from "react-feather";
import PropTypes from "prop-types";
import { useRef } from "react";
import clsx from "clsx";

const InputFile = (props) => {
  const { onChange, error, errorText } = props;

  const inputRef = useRef(null);

  const handleInput = () => {
    inputRef && inputRef.current.click();
  };

  const handleChange = (e) => {
    onChange(e);
    inputRef && (inputRef.current.value = "");
  };

  return (
    <div className="relative">
      <input
        type="file"
        onChange={handleChange}
        ref={inputRef}
        className="hidden"
        multiple
      />
      <div
        className={`flex items-center space-x-2.5 cursor-pointer text-primary border-2 border-dashed ${
          error ? "border-red-500" : "border-primary"
        } w-[250px] h-[50px] px-5`}
        onClick={handleInput}
      >
        <UploadCloud />
        <span className="text-lg font-medium">Upload Files</span>
      </div>
      {error && (
        <caption
          className={`text-ink-lightest text-sm mt-3 block text-left ${clsx(
            error && "text-red-500"
          )}`}
        >
          {errorText}
        </caption>
      )}
    </div>
  );
};

InputFile.propTypes = {
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorText: PropTypes.string,
};

export default InputFile;
