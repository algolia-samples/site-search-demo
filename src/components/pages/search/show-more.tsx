import type { FC, MouseEvent as ReactMouseEvent } from 'react';

interface ShowMoreProps {
  hasMore: boolean;
  refine: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ShowMore: FC<ShowMoreProps> = ({ hasMore, refine }) => {
  if (!hasMore) {
    return null;
  }

  const handleOnClick = (
    event: ReactMouseEvent<HTMLButtonElement, MouseEvent>
  ) => refine(event);

  return (
    <button
      className="cursor-pointer color-grey-500 mt-24 app-none fsz-12 fw-semibold bdw-0 bgc-grey-100 p-12 d-block w-100p bdr-6 sm:d-none"
      onClick={handleOnClick}
    >
      Show more
    </button>
  );
};

export default ShowMore;
