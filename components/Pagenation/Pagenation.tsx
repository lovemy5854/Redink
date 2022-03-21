import React from 'react';
import { usePagination } from '@/hooks';

export default function FlatList(props: {
  render?: any;
  data?: any;
  dataOffset?: any;
  controlsOffset?: any;
}) {
  const { renderControls, getPaginatedData } = usePagination(props);

  return (
    <>
      <section>{getPaginatedData().map(props.render)}</section>
      {renderControls()}
    </>
  );
}
