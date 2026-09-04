import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import AppointmentCard from "../components/features/AppointmentCard";
import Modal from "../components/ui/Modal";
import LoadingSkeleton from "../components/ui/LoadingSkeleton";
import useMockFetch from "../hooks/useMockFetch";
import { useApp } from "../context/AppContext";

const initialForm = {
  professional: "",
  type: "",
  date: "",
  time: "",
  mode: "Video"
};

export default function Appointments() {
  const { appointments, addAppointment } = useApp();
  const { loading, error } = useMockFetch(appointments);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const next = {};
    if (!form.professional.trim()) next.professional = "Professional name is required.";
    if (!form.type.trim()) next.type = "Appointment type is required.";
    if (!form.date) next.date = "Date is required.";
    if (!form.time) next.time = "Time is required.";
    return next;
  };

  const submit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    addAppointment(form);
    setForm(initialForm);
    setOpen(false);
    setSuccess("Appointment booked successfully.");
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <>
      <PageHeader
        eyebrow="Appointments"
        title="Manage your care schedule"
        description="Keep upcoming consultations and completed sessions in one place."
        action={<button className="button primary" onClick={() => setOpen(true)}>+ Book appointment</button>}
      />

      {success && <div className="alert success" role="status">{success}</div>}
      {loading && <LoadingSkeleton count={3} />}
      {error && <div className="alert error">{error}</div>}

      {!loading && !error && (
        <div className="appointment-list">
          {appointments.map((item) => <AppointmentCard key={item.id} appointment={item} />)}
        </div>
      )}

      <Modal open={open} title="Book an appointment" onClose={() => setOpen(false)}>
        <form className="form-stack" onSubmit={submit} noValidate>
          <label className="field">
            <span>Professional</span>
            <input
              value={form.professional}
              onChange={(e) => setForm({ ...form, professional: e.target.value })}
              placeholder="e.g. Dr. Maya Collins"
              aria-invalid={!!errors.professional}
            />
            {errors.professional && <small className="field-error">{errors.professional}</small>}
          </label>

          <label className="field">
            <span>Appointment type</span>
            <input
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              placeholder="e.g. Wellbeing review"
              aria-invalid={!!errors.type}
            />
            {errors.type && <small className="field-error">{errors.type}</small>}
          </label>

          <div className="form-row">
            <label className="field">
              <span>Date</span>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                aria-invalid={!!errors.date}
              />
              {errors.date && <small className="field-error">{errors.date}</small>}
            </label>

            <label className="field">
              <span>Time</span>
              <input
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                aria-invalid={!!errors.time}
              />
              {errors.time && <small className="field-error">{errors.time}</small>}
            </label>
          </div>

          <label className="field">
            <span>Mode</span>
            <select value={form.mode} onChange={(e) => setForm({ ...form, mode: e.target.value })}>
              <option>Video</option>
              <option>In person</option>
              <option>Phone</option>
            </select>
          </label>

          <div className="modal-actions">
            <button className="button secondary" type="button" onClick={() => setOpen(false)}>Cancel</button>
            <button className="button primary" type="submit">Book appointment</button>
          </div>
        </form>
      </Modal>
    </>
  );
}
