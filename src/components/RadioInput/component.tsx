import cn from "classnames";
import { FormEvent, useRef } from "react";
import { Radius, Size, Variant } from "../Types/types";
import "./styles.scss";



type Props = {
  id: string;
  values: string[];
  label?: string;
  description?: string;
  error?: string;
  variant?: Variant;
  radius?: Radius;
  size?: Size;
  disabled?: boolean;
  withAsterisk?: boolean;
  onInput: (event: FormEvent) => void;
};

const RadioInput: React.FC<Props> = ({
  id,
  values,
  label,
  description,
  error,
  variant,
  radius,
  size,
  disabled,
  withAsterisk,
  onInput,
}) => {
  const ref = useRef<HTMLInputElement | null>(null)

  const inputStyle = cn({
    [`inputWrapper__radius_${radius}`]: true,
    [`font-size_${size}`]: true,
    errorWrapper: !!error,
  });

  const inputFilledStyle = cn({
    filled: variant === Variant.Filled,
  });

  const inputUnstyledStyle = cn({
    unstyled: variant === Variant.Unstyled,
  });

  const labelStyle = cn({
    labelWrapper: true,
    [`font-size_${size}`]: true,
  });

  const descriptionStyle = cn({
    descriptionWrapper: true,
    [`font-size_${size}`]: true,
  });

  const errorStyle = cn({
    errorWrapper: true,
    [`font-size_${size}`]: true,
  });
  
  // const handleChange = (event) => {
  //   const result = {[(event.target as HTMLInputElement) .name]: (event.target as HTMLInputElement).value};
  //   console.log(result);
    
  // }

  return (
    <div className="root">
      <div className="formField">
        {label && (
          <div className={labelStyle}>
            <label>
              {label}
              {withAsterisk && <span className="inputRequired">*</span>}
            </label>
          </div>
        )}
        {description && (
          <div className={descriptionStyle}>
            <p>{description}</p>
          </div>
        )}
        <div className="inputWrapper">
          <div className={inputStyle}>
            {values.map((val, index) =>  
            <div className="radioWrapper" key={index}>
              <label>
                {val}
              </label>
              <input
                id={val}
                type='radio'
                ref={ref}
                name={id}
                required={true}
                disabled={disabled}
                value={val}
                onInput={onInput}
                className={cn(inputStyle, inputFilledStyle, inputUnstyledStyle)}
              /> 
            </div>
           )}
           
          </div>
        </div>
        {error && (
          <div className={errorStyle}>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioInput;
