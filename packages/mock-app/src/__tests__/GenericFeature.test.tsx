import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { GenericFeature } from '../components/GenericFeature/GenericFeature';
import { ComponentType, DynamicComponentRenderer, IDynamicComponentRendererProps } from '@mock-app/components';

jest.mock('@mock-app/components', () => ({
  JsonForm: jest.fn(),
  Button: jest.fn(),
  DynamicComponentRenderer: jest.fn(),
  toastMessage: jest.fn(),
  ComponentType: {
    EntryData: 'EntryData',
    Void: 'Void',
    Submit: 'Submit',
  },
  Status: {
    success: 'success',
    error: 'error',
  },
}));

jest.mock('@mock-app/services', () => ({
  logService: jest.fn().mockImplementation(() => 'logService'),
}));

describe('GenericFeature', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const componentsData: IDynamicComponentRendererProps[] = [
    {
      name: 'JsonForm', // import from @mock-app/components
      type: 'EntryData' as ComponentType,
      props: {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            vegetarian: {
              type: 'boolean',
            },
          },
        },
        uiSchema: {
          type: 'VerticalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/name',
            },
            {
              type: 'Control',
              scope: '#/properties/vegetarian',
            },
          ],
        },
        data: {},
        className: '',
      },
    },
    {
      name: 'Button',
      type: 'Submit' as ComponentType,
      props: {},
    },
  ];

  test('should render UI with componentsData and call onChange in input form', async () => {
    (DynamicComponentRenderer as any).mockImplementation(
      ({ name, type, props }: { name: string; type: string; props: Record<string, any> }) => (
        <div>
          {type === ComponentType.EntryData && (
            <>
              <label htmlFor='jsonForm'>{name}</label>
              <input id='jsonForm' onChange={props.onChange} />
            </>
          )}
          {type === ComponentType.Submit && <button>Submit</button>}
        </div>
      ),
    );
    render(<GenericFeature components={componentsData} services={[]} />);

    const inputField = screen.getByLabelText('JsonForm');
    await fireEvent.input(inputField, { target: { value: 'test' } });
    expect(screen.getByText('Submit')).not.toBeNull();
  });

  test('should render UI with componentsData and call onClick to trigger services', () => {
    const mock = jest.fn().mockImplementation((value) => expect(value).toBe('logService'));
    const services = [
      {
        name: 'logService',
        parameters: [],
      },
    ];

    (DynamicComponentRenderer as any).mockImplementation(
      ({ name, props }: { name: string; props: Record<string, any> }) => (
        <div>
          <p>{name}</p>

          {name === 'Button' && <button onClick={() => props.onClick(mock)}>Click me!</button>}
        </div>
      ),
    );

    render(<GenericFeature components={componentsData} services={services} />);
    fireEvent.click(screen.getByText('Click me!'));

    expect(screen.getByText('Button')).not.toBeNull();
  });
});
