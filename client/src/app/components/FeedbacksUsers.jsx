import React from 'react';

export const FeedbacksUsers = () => {
  return (
    <div>
      <section className="mt-12 md:mt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Recent Feedbacks
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 sm:p-8 border border-gray-400 shadow-2xl">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://ca.slack-edge.com/T0423U1MW21-U05AMRPSB8T-e6f9f909d167-512"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-1 text-lg font-medium text-gray-900">David Mahecha</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum
                incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque
                quibusdam eius accusamus error officiis atque voluptates magnam!
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 sm:p-8 border border-gray-400 shadow-2xl">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://ca.slack-edge.com/T0423U1MW21-U060MQRV3ST-6ca65949f3d5-512"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-1 text-lg font-medium text-gray-900">Brayan Salazar</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum
                incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque
                quibusdam eius accusamus error officiis atque voluptates magnam!
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 sm:p-8 border border-gray-400 shadow-2xl">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://ca.slack-edge.com/T0423U1MW21-U0612B60JRG-bb4a1d8e4f38-512"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-1 text-lg font-medium text-gray-900">Luis Diaz</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum
                incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque
                quibusdam eius accusamus error officiis atque voluptates magnam!
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};
