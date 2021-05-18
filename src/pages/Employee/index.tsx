import { Button, Table, Form } from "antd"
import { DEFAULT_LIMIT, DEFAULT_PAGE } from "constant";
import { useFetch } from "hooks/useFetch";
import { usePost } from "hooks/usePost";
import { useCallback, useEffect, useState } from "react";
import AddNewForm from "./components/AddNewForm";
import columns from "./renderColumns";

const { useForm } = Form;

const Employee = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isAddNew, setIsAddNew] = useState<boolean>(false);
  const [employeeForm] = useForm();
  const { data, isLoading, total, refetch } = useFetch({
    endpoint: "employee",
    params: {
      page: currentPage,
      limit: DEFAULT_LIMIT
    }
  });
  const { postData, status } = usePost();

  useEffect(() => {
    refetch();
  }, [currentPage]);

  useEffect(() => {
    if (status === 201) {
      refetch();
      setIsAddNew(false);
      employeeForm.resetFields();
    }
  }, [status]);

  const handleChange = useCallback((config) => {
    const { current } = config;
    setCurrentPage(current);
  }, []);

  const handleSubmit = useCallback(() => {
    const { user } = employeeForm.getFieldsValue();
    postData("employee", user);
  }, [])

  return (
    <div className="table-employee">
      <h1 className="title">Employees</h1>
      <Table
        dataSource={data}
        columns={columns}
        loading={isLoading}
        onChange={handleChange}
        pagination={{ pageSize: DEFAULT_LIMIT, total }}
        rowKey="id"
      />
      {isAddNew && <AddNewForm onFinish={handleSubmit} employeeForm={employeeForm} />}
      <div className="button-wrapper">
        <Button href='/counter'>Counter</Button>
        <Button onClick={() => setIsAddNew(!isAddNew)}>Add new</Button>
      </div>
    </div>
  );
};

export default Employee;