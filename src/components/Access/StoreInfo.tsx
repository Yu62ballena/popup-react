import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type StoreInfoProps = {
  icon: IconDefinition;
  className?: string;
  title?: string;
  title2ndLine?: string;
  content: string;
  content2?: string;
  content3?: string;
  style?: React.CSSProperties;
};

function StoreInfo({
  icon,
  className = "",
  title,
  title2ndLine,
  content,
  content2,
  content3,
  style,
}: StoreInfoProps) {

  return (
    <div className="flex mb-7">
      <FontAwesomeIcon
        icon={icon}
        style={style}
        className={`mr-2.5 mt-1 animate-icon ${className}`}
      />
      <div>
        {title && (
          <h3 className="leading-normal mb-5">
            {title}
            {title2ndLine && (
              <>
                <br />
                {title2ndLine}
              </>
            )}
          </h3>
        )}

        <p className="text-xl leading-normal">{content}</p>
        {content2 && <p className="text-xl leading-normal">{content2}</p>}
        {content3 && <p className="text-xl leading-normal">{content3}</p>}
      </div>
    </div>
  );
}

export default StoreInfo;
