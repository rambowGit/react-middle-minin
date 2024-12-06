import cn from "classnames";
import { useState } from "react";
import styles from "./styles.module.scss";
import "./styles.scss";

export enum Variant {
  Default = 'default',
  Filled = 'filled',
  Unstyled = 'unstyled',
}
export enum Radius {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum Size {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

type Props = {
  inputValue: string | number;
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  variant?: Variant;
  radius?: Radius;
  size?: Size;
  disabled?: boolean;
  withAsterisk?: boolean;
};

const TextInput: React.FC<Props> = ({
  inputValue,
  placeholder,
  label,
  description,
  error,
  variant,
  radius,
  size,
  disabled,
  withAsterisk,
}) => {

  const [value, setValue] = useState(inputValue || "");
  
  const inputStyle = cn({
    [`inputWrapper__radius_${radius}`]: true,
    [`font-size_${size}`]: true,
    'errorWrapper': !!error,
  });
  
  const inputFilledStyle = cn({
    'filled': variant === Variant.Filled,
  });
  
  const inputUnstyledStyle = cn({
    'unstyled': variant === Variant.Unstyled,
  });
  
  const labelStyle = cn({
    'labelWrapper': true,
    [`font-size_${size}`]: true,
  });
  
  const descriptionStyle = cn({
    'descriptionWrapper': true,
    [`font-size_${size}`]: true,
  });
  
  const errorStyle = cn({
    'errorWrapper': true,
    [`font-size_${size}`]: true,
  });


  return (
    <div className={styles.root}>
      {label && (
        <div className={labelStyle}>
          <label className={styles.label}>
            {label}
            {withAsterisk && (
              <span className="inputRequired">
                *
              </span>
            )}
          </label>
        </div>
      )}
      {description && (
        <div className={descriptionStyle}>
          <p className={""}>{description}</p>
        </div>
      )}
      <div className="inputWrapper">
        <div className={inputStyle}>
          <input
            required={true}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            onChange={(event) => setValue(event.currentTarget.value)}
            className={cn(inputStyle, inputFilledStyle, inputUnstyledStyle)}
          />
        </div>
      </div>
      {error && <div className={errorStyle}>
      <p>{error}</p>
      </div>}
    </div>
  );
};

export default TextInput;
