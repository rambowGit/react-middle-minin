import { IconEye } from "@tabler/icons-react";
import cn from "classnames";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Radius, Size, Variant } from "../Types/types";
import "./styles.scss";



type Props = {
  id: string;
  value: string | number;
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  variant?: Variant;
  radius?: Radius;
  size?: Size;
  disabled?: boolean;
  withAsterisk?: boolean;
  withIcon?: boolean;
  onInput: (event: FormEvent) => void;
};

const TextInput: React.FC<Props> = ({
  id,
  value,
  placeholder,
  label,
  description,
  error,
  variant,
  radius,
  size,
  disabled,
  withAsterisk,
  withIcon,
  onInput,
}) => {
  const [iconSize, setIconSize] = useState<string>('1em');
  const icon = <IconEye size={iconSize}/>;
  const ref = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!size) {
      return;
    }
    onSizeChange(size);
  }, [size])
  
  const onSizeChange = (size: Size) =>
    setIconSize(() => {
      switch (size) {
        case Size.xs:
          return '0.5em';
        case Size.sm:
          return '0.75em';
        case Size.md:
          return '1em';
        case Size.lg:
          return '1.25em';
        default:
          return '1.75em';
      }
    });


    const inputStyle = cn({
      [`radius-size_${radius}`]: true,
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
  
  const iconStyle = cn({
    'iconLeft': true,
    [`icon-size_${size}`]: true,
  });

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
            {withIcon && <div className={iconStyle}>
              {icon}
            </div>}
            <input
              type='password'
              ref={ref}
              name={id}
              required={true}
              disabled={disabled}
              value={value}
              placeholder={placeholder}
              onChange={() => null}
              onInput={onInput}
              className={cn(inputStyle, inputFilledStyle, inputUnstyledStyle)}
              autoComplete={'additional-name'}
            />
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

export default TextInput;
