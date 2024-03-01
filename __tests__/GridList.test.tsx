/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import GridList from '../package/components/GridList';
import { IGridList } from '../index.d';
import '@testing-library/jest-dom'


describe('GridList component', () => {
  const renderGridList = (props: Partial<IGridList> = {}) => {
    const defaultProps: IGridList = {
      isLoading: false,
      resourceItem: () => null,
      resourceData: [],
      resourceName: ""
    };
    return render(<GridList {...defaultProps} {...props} />);
  };

  it('renders skeleton placeholders correctly when isLoading is true and loader prop is not provided', () => {
    const { getAllByTestId } = renderGridList({ isLoading: true });
    const skeletonPlaceholders = getAllByTestId('skeleton');
    expect(skeletonPlaceholders.length).toBe(6);
  });

  it('renders actual data correctly when isLoading is false and resourceData is provided', () => {
    const mockData = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
    const { getByText } = renderGridList({ isLoading: false, resourceData: mockData, resourceItem: (item: any) => <p>{item.name}</p> });
    mockData.forEach(item => {
      expect(getByText(item.name)).toBeInTheDocument();
    });
  });

  it('renders empty state correctly when isLoading is false and resourceData is empty', () => {
    const { getByTestId } = renderGridList({ isLoading: false, resourceData: [] });
    expect(getByTestId('empty')).toBeInTheDocument();
  });

  it('throws an error when resourceItem prop is not provided', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => { });
    expect(() => {
      renderGridList({ resourceItem: undefined });
    }).toThrow('resourceItem must be specified in GridList');
    spy.mockRestore();
  });
});