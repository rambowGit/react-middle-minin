import cn from "classnames";
import { useEffect, useState } from "react";
import Switch from "../Switch/component";
import TextInput, { Radius, Size, Variant } from "../TextInput/component";
import styles from "./styles.module.scss";

const SIZE_NUMBER = {
  [Size.xs]: 0,
  [Size.sm]: 25,
  [Size.md]: 50,
  [Size.lg]: 75,
  [Size.xl]: 100,
};

const RADIUS_NUMBER = {
  [Size.xs]: 0,
  [Size.sm]: 25,
  [Size.md]: 50,
  [Size.lg]: 75,
  [Size.xl]: 100,
};

const TextInputControls: React.FC = () => {
  const [variant, setVariant] = useState<Variant>(Variant.Default);
  const [size, setSize] = useState<Size>(Size.md);
  const [sizeNumber, setSizeNumber] = useState<number>(SIZE_NUMBER[size]);
  const [radius, setRadius] = useState<Radius>(Radius.md);
  const [radiusNumber, setRadiusNumber] = useState<number>(
    RADIUS_NUMBER[radius]
  );
  const [label, setLabel] = useState<string>("");
  const [withAsterisk, setWithAsterisk] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");
  
  useEffect(() => {
    setSizeNumber(SIZE_NUMBER[size]);
  }, [size]);

  useEffect(() => {
    setRadiusNumber(RADIUS_NUMBER[radius]);
  }, [radius]);

  const onVariantChange = (variant: string) => setVariant(variant as Variant);

  const onSizeChange = (size: string) =>
    setSize(() => {
      switch (size) {
        case "0":
          return Size.xs;
        case "25":
          return Size.sm;
        case "50":
          return Size.md;
        case "75":
          return Size.lg;
        default:
          return Size.xl;
      }
    });

  const onRadiusChange = (radius: string) =>
    setRadius(() => {
      switch (radius) {
        case "0":
          return Radius.xs;
        case "25":
          return Radius.sm;
        case "50":
          return Radius.md;
        case "75":
          return Radius.lg;
        default:
          return Radius.xl;
      }
    });
    
  const onAsteriskChange = (isChecked: boolean) => {
    setWithAsterisk(isChecked);
  }

  return (
    <div className={styles.root}>
      <div className={cn(styles.inputComponent)}>
        <TextInput
          variant={variant}
          inputValue={""}
          placeholder="Your name"
          label={label}
          description={description}
          error={error}
          withAsterisk={withAsterisk}
          size={size}
          radius={radius}
          disabled={false}
        />
      </div>

      <div className={styles.configComponent}>
        {/* Variant */}
        <div className="formField">
          <label htmlFor="variant">Variant</label>
          <select
            name="variant"
            defaultValue={Variant.Default}
            onChange={(e) => onVariantChange(e.target.value)}
          >
            <option value={Variant.Default}>{Variant.Default}</option>
            <option value={Variant.Filled}>{Variant.Filled}</option>
            <option value={Variant.Unstyled}>{Variant.Unstyled}</option>
          </select>
        </div>
        {/* Size */}
        <div className="formField">
          <div className={styles.rangeSlider}>
            <label htmlFor="size">Size:</label>
            <input
              type="range"
              min="0"
              max="100"
              id="size"
              step="25"
              value={sizeNumber}
              onChange={(e) => onSizeChange(e.target.value)}
            />
            <div className={styles.sliderticks}>
              <span>{Size.xs}</span>
              <span>{Size.sm}</span>
              <span>{Size.md}</span>
              <span>{Size.lg}</span>
              <span>{Size.xl}</span>
            </div>
          </div>
        </div>
        {/* Radius */}
        <div className="formField">
          <div className={styles.rangeSlider}>
            <label htmlFor="radius">Radius:</label>
            <input
              type="range"
              min="0"
              max="100"
              id="radius"
              step="25"
              value={radiusNumber}
              onChange={(e) => onRadiusChange(e.target.value)}
            />
            <div className={styles.sliderticks}>
              <span>{Radius.xs}</span>
              <span>{Radius.sm}</span>
              <span>{Radius.md}</span>
              <span>{Radius.lg}</span>
              <span>{Radius.xl}</span>
            </div>
          </div>

          {/* Label */}
          <div className="formField">
            <label htmlFor="label">Label</label>
            <input
              id="label"
              type="text"
              // value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>
          {/* Asterisk */}
          <div className="formField">
            <label htmlFor="asterisk">With Asterisk</label>
            <Switch onChecked={onAsteriskChange}/>
          </div>
           {/* Description */}
           <div className="formField">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              // value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* Description */}
          <div className="formField">
            <label htmlFor="error">Error</label>
            <input
              id="error"
              type="text"
              // value={description}
              onChange={(e) => setError(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextInputControls;
