import { useState } from 'react';
import { Pagination, Toggle, SelectPicker, TagPicker, InputNumber } from 'rsuite';

const Switch = ({ label, checked, onChange }) => {
  return (
    <span>
      <Toggle checked={checked} onChange={onChange}>
        {label}
      </Toggle>
    </span>
  );
};

const limitOptions = [30, 50, 100];

const ViewAllPagination = () => {
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(true);
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(true);
  const [ellipsis, setEllipsis] = useState(true);
  const [boundaryLinks, setBoundaryLinks] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [size, setSize] = useState('sm');
  const [maxButtons, setMaxButtons] = useState(4);
  const [total, setTotal] = useState(200);
  // const [layout, setLayout] = useState(['skip', '-', 'pager', '|', 'limit', '|', 'total']);
  const [layout, setLayout] = useState(['limit', '-', 'pager', '|', 'skip']);
  const [limit, setLimit] = useState(30);

  return (
    <section className='col-12 col-lg-8 my-4'>
      <Pagination
        layout={layout}
        size={size}
        prev={prev}
        next={next}
        first={first}
        last={last}
        ellipsis={ellipsis}
        boundaryLinks={boundaryLinks}
        total={total}
        limit={limit}
        limitOptions={limitOptions}
        maxButtons={maxButtons}
        activePage={activePage}
        onChangePage={setActivePage}
        onChangeLimit={setLimit}
      />
    </section>
  );
};

export default ViewAllPagination;