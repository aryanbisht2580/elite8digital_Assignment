import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Rain from '../Components/Rain';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function ContactScreen() {
  return (
    <div className="relative pt-20 min-h-screen overflow-hidden bg-gradient-to-br from-[#1b1b1b] to-[#2c2c2c] flex items-center justify-center px-6">
     
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Rain />
      </div>
      <div className="relative z-20 w-full max-w-7xl text-white px-6 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center mb-20"
        >
          {[
            {
              icon: Mail,
              label: 'Email Address',
              value: 'aryanbisht2580@gmail.com',
            },
            { icon: Phone, label: 'Phone Number', value: '+91 8755552378' },
            {
              icon: MapPin,
              label: 'Address',
              value: ['XYZ Street,', 'Dehradun, Uttarakhand'],
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              className="bg-neutral-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center bg-neutral-300 rounded-full">
                <item.icon className="text-black" />
              </div>
              <h3 className="font-bold text-lg mb-1">{item.label}</h3>
              {Array.isArray(item.value) ? (
                item.value.map((line, idx) => (
                  <p key={idx} className="text-sm text-gray-300">
                    {line}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-300">{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto border border-white rounded-2xl p-10 bg-neutral-900/40 backdrop-blur-md"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sm uppercase text-gray-400">Contact Me</p>
            <h2 className="text-3xl font-bold mb-2">How Can I Help You?</h2>
          </motion.div>

          <motion.form
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black"
          >
            {[
              { id: 'name', label: 'Your Name *', type: 'text', colSpan: 1 },
              { id: 'email', label: 'Your Email *', type: 'email', colSpan: 1 },
            ].map((field, i) => (
              <motion.div
                key={field.id}
                custom={i}
                variants={fadeUp}
                className={`flex flex-col col-span-${field.colSpan}`}
              >
                <label
                  htmlFor={field.id}
                  className="text-white text-sm font-semibold mb-2"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  className="p-3 rounded-md bg-neutral-300 text-black focus:outline-none"
                  required
                />
              </motion.div>
            ))}

            <motion.div
              custom={2}
              variants={fadeUp}
              className="flex flex-col col-span-2 mt-10 mb-10"
            >
              <label
                htmlFor="message"
                className="text-white text-sm font-semibold mb-2"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                rows="5"
                className="p-3 rounded-md bg-neutral-300 text-black focus:outline-none"
                required
              ></textarea>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUp}
              className="col-span-2 flex items-center space-x-3 text-white text-sm"
            >
              <input type="checkbox" id="consent" className="accent-white" />
              <label htmlFor="consent">
                I agree that my submitted data is being collected and stored.
              </label>
            </motion.div>

            <motion.div custom={4} variants={fadeUp} className="col-span-2 mt-5">
              <button
                type="submit"
                className="w-full py-3 bg-neutral-300 text-black font-semibold rounded-md hover:bg-gray-200 transition duration-300"
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactScreen;
