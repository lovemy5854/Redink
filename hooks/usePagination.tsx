import useControls from './useControls';

export default function usePagination({
  data,
  dataOffset,
  controlsOffset,
}: {
  data?: any;
  dataOffset?: any;
  controlsOffset?: any;
}) {
  const totalOfPages = Math.ceil(data.length / dataOffset);
  const { currentPage, renderControls } = useControls({
    totalOfPages,
    controlsOffset,
  });

  function getPaginatedData() {
    const start = currentPage * dataOffset - dataOffset;
    const end = start + dataOffset;
    const paginatedItems = data.slice(start, end);

    return paginatedItems;
  }

  return {
    renderControls,
    getPaginatedData,
  };
}
