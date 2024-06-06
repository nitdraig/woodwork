import { FC } from 'react';
import { format } from 'date-fns';
import { PaymentModalProps } from '../../../types/Types';

const PaymentModal: FC<PaymentModalProps> = ({ isOpen, onClose, peopleCount, startTime, endTime, selectedDay, pricePerHour }) => {
  if (!isOpen) return null;

  const formattedStartTime = format(startTime, 'h:mm aa');
  const formattedEndTime = format(endTime, 'h:mm aa');
  const formattedSelectedDay = format(selectedDay, 'dd/MM/yyyy');
  const totalAmount = (endTime.getHours() - startTime.getHours()) * pricePerHour * peopleCount;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-3xl max-h-[96vh] overflow-y-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Opciones de Pago</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Nombre del titular</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Nombre del titular" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Número de tarjeta</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Fecha de vencimiento</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="MM/AA" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">CVC</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="123" />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-gray-700">Cantidad de personas:</span>
              <span className="text-gray-700">{peopleCount}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-gray-700">Día seleccionado:</span>
              <span className="text-gray-700">{formattedSelectedDay}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-gray-700">Hora de inicio:</span>
              <span className="text-gray-700">{formattedStartTime}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-gray-700">Hora de fin:</span>
              <span className="text-gray-700">{formattedEndTime}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-gray-700">Precio por Hora x Persona:</span>
              <span className="text-gray-700">${pricePerHour}</span>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-gray-700">Total:</span>
              <span className="text-gray-700">${totalAmount}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-[#323E1D] text-white hover:bg-[#cb3234] rounded-lg mr-2">Cancelar</button>
          <button className="px-4 py-2 bg-[#F9EC34] hover:bg-[#A67C52] text-black hover:text-white rounded-lg">Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;