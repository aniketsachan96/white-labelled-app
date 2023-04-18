import useMediaQuery from "./useMediaQuery";

// TODO: Keep the value in global state and access the value directly within the hook.

function useIsTabletMedia() {
  return useMediaQuery("screen and (max-width: 1024px)");
}

export default useIsTabletMedia;
